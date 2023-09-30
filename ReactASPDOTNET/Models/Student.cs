using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ReactASPDOTNET.Models
{
    [BsonIgnoreExtraElements]
    public class Student
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("firstname")]
        public string FirstName { get; set; }

        [BsonElement("lastname")]
        public string LastName { get; set; }

        [BsonElement("department")]
        public string Department { get; set; }

        [BsonElement("class")]
        public string ClassName { get; set; }  // Change the property name to ClassName

        [BsonElement("gender")]
        public byte Gender { get; set; }

        [BsonElement("birthday")]
        public DateTime DateOfBirth { get; set; }

        [BsonElement("age")]
        public int Age { get; set; }

        [BsonElement("graduated")]
        public bool IsGraduated { get; set; }  // Change the property name to IsGraduated

        public Student()
        {
        }
    }


}

