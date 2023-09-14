using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Persistence.Context;
using Domain.Models;
using Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repositories
{
    public class PersonaRepository : IPersonaRepository
    {
        private readonly ApplicationDbContext _context;

        public PersonaRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Persona>> ObtenerUltimas10MayoresDe21()
        {
            DateTime fechaLimite = DateTime.Now.AddYears(-21);

            return await _context.Personas
                .Where(p => p.FechaNacimiento <= fechaLimite)
                .OrderBy(p => p.Nombre)
                .Take(10)
                .ToListAsync();
        }

        public async Task AgregarPersona(Persona persona)
        {
            await _context.Personas.AddAsync(persona);
            await _context.SaveChangesAsync();
        }
    }
}
