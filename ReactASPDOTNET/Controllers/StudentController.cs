using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactASPDOTNET.Services;
using ReactASPDOTNET.Models;

namespace ReactASPDOTNET.Controllers
{
    [ApiController]
    [Route("api/student")]
    //[Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly StudentServices _studentServices;

        public StudentController(StudentServices studentServices) {
            _studentServices = studentServices;
        }

        // GET: api/student
        [HttpGet]
        public async Task<List<Student>> Get() => await _studentServices.GetAsync();

        // GET: api/Student/6516a2d05fd8c96429b0f6e9
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Student>> Get(string id)
        {
            Student student = await _studentServices.GetAsync(id);
            if (student == null)
            {
                return NotFound();
            }
            return student;
        }

        // POST: api/Student
        [HttpPost]
        public async Task<ActionResult<Student>> Post(Student newStudent)
        {
            await _studentServices.CreateAsync(newStudent);
            return CreatedAtAction(nameof(Get), new { id = newStudent.Id }, newStudent);
        }

        // PUT: api/Student/6516a2d05fd8c96429b0f6e9
        [HttpPut("{id:length(24)}")]
        public async Task<ActionResult> Put(string id, Student updateStudent)
        {
            Student student = await _studentServices.GetAsync(id);
            if (student == null)
            {
                return NotFound("There is no student with this id: " + id);
            }
            updateStudent.Id = student.Id;

            await _studentServices.UpdateAsync(id, updateStudent);

            return Ok("Updated Successfully");
        }

        // DELETE: api/Student/6516a2d05fd8c96429b0f6e9
        [HttpDelete("{id:length(24)}")]
        public async Task<ActionResult> Delete(string id)
        {
            Student student = await _studentServices.GetAsync(id);

            if (student == null)
            {
                return NotFound("There is no student with this id: " + id);
            }
            await _studentServices.RemoveAsync(id);

            return Ok("Deleted Successfully");
        }
    }
}
