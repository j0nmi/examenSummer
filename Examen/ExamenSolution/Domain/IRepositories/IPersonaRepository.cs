using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;

namespace Domain.Repositories
{
    public interface IPersonaRepository
    {
        Task<List<Persona>> ObtenerUltimas10MayoresDe21();
        Task AgregarPersona(Persona persona);
    }
}
