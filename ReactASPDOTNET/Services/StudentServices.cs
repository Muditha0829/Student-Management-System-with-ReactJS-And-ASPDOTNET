using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ReactASPDOTNET.Data;
using ReactASPDOTNET.Models;

namespace ReactASPDOTNET.Services
{
	public class StudentServices
	{
		private readonly IMongoCollection<Student> _studentCollection;
		public StudentServices(IOptions<DatabaseSettings> settings)
		{
			var mongoClient = new MongoClient(settings.Value.Connection);
			var mongoDb = mongoClient.GetDatabase(settings.Value.DatabaseName);
			_studentCollection = mongoDb.GetCollection<Student>(settings.Value.CollectionName);
		}

		//Get all Students
		public async Task<List<Student>> GetAsync() => await _studentCollection.Find(_ => true).ToListAsync();

		//Get student by ID
		public async Task<Student> GetAsync(string id) => await _studentCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

		//Add new student
		public async Task CreateAsync(Student newStudent) => await _studentCollection.InsertOneAsync(newStudent);

		//Update Student
		public async Task UpdateAsync(string id, Student updateStudent) => await _studentCollection.ReplaceOneAsync(x => x.Id == id, updateStudent);

		//Delete Student
		public async Task RemoveAsync(string id) => await _studentCollection.DeleteOneAsync(x => x.Id == id);
	}
}

