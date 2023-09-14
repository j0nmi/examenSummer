using Microsoft.AspNetCore.Mvc;
using Domain.Repositories;
using DTO;
using Persistence;
using Persistence.Context;

namespace ExamenAPI.Controllers
{
    [ApiController]
    [Route("api/personas")]
    public class PersonasController : ControllerBase
    {
        private readonly IPersonaRepository _personaRepository;
        private readonly ApplicationDbContext _context;

        public PersonasController(IPersonaRepository personaRepository, ApplicationDbContext context)
        {
            _personaRepository = personaRepository;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<PersonaDTO>>> ObtenerUltimas10MayoresDe21()
        {
            try
            {
                var personas = await _personaRepository.ObtenerUltimas10MayoresDe21();
                var personasDTO = new List<PersonaDTO>();

                foreach (var persona in personas)
                {
                    var personaDTO = new PersonaDTO
                    {
                        Nombre = persona.Nombre,
                        FechaNacimiento = persona.FechaNacimiento,
                        Telefono = persona.Telefono
                    };

                    personasDTO.Add(personaDTO);
                }

                return Ok(personasDTO);
            }
            catch (Exception ex)
            {
                _context.Database.RollbackTransaction();
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> AgregarPersona([FromBody] PersonaDTO personaDTO)
        {
            try
            {
                var persona = new Domain.Models.Persona
                {
                    Nombre = personaDTO.Nombre,
                    FechaNacimiento = personaDTO.FechaNacimiento,
                    Telefono = personaDTO.Telefono
                };

                await _personaRepository.AgregarPersona(persona);

                return Ok("Persona agregada exitosamente.");
            }
            catch (Exception ex)
            {
                _context.Database.RollbackTransaction();
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
