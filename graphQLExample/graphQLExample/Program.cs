


//using HotChocolate.AspNetCore;

//var builder = WebApplication.CreateBuilder(args);
//builder.Services.AddGraphQLServer().AddQueryType<Query>();
//var app = builder.Build();

//app.MapGraphQL();

//app.Run();

using graphQLExample;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Register services
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddControllers(); // Add API controllers

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>();

var app = builder.Build();

// Custom middleware for authorization
app.Use(async (context, next) =>
{
    // Skip authorization for API routes
    if (context.Request.Path.StartsWithSegments("/api"))
    {
        await next();
        return;
    }

    // Check for session-id in the headers
    if (!context.Request.Headers.TryGetValue("session-id", out var sessionId) || string.IsNullOrEmpty(sessionId))
    {
        context.Response.StatusCode = StatusCodes.Status401Unauthorized; // Unauthorized status
        await context.Response.WriteAsync("Unauthorized: Missing session-id" + context.Request.Path);
        return;
    }

    var userRepository = context.RequestServices.GetRequiredService<IUserRepository>();
    var user = userRepository.GetUserBySessionId(sessionId);

    if (user == null)
    {
        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
        await context.Response.WriteAsync("Unauthorized: Invalid session-id");
        return;
    }

    context.Items["User"] = user;

    await next();
});

// Map controllers
app.MapControllers(); // Ensure that the API routes are mapped

// Map GraphQL
app.MapGraphQL();

app.Run();


public class User
{
    public string Id { get; set; }
    public string PersonalId { get; set; }
    public string ? SessionId { get; set; }
    public string MilitaryId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public string City { get; set; }
    public string Street { get; set; }
    public string HouseNumber { get; set; }
    public string Password { get; set; }
    public List<LoginData> Logins { get; set; }
    public string Note { get; set; }
    public string ReferringUser { get; set; }
    public string Gender { get; set; }
    public DateTime BirthDate { get; set; }
    public bool IsDeleted { get; set; }
    public string Profession { get; set; }
    public List<UserAssignment> Assignments { get; set; }
    public List<CollectionSubscription> CollectionActivitiesHistory { get; set; }
    public List<CollectionSubscription> SubscribedCollections { get; set; }
}

public class UserAssignment
{
    public StructPreview StructPreview { get; set; }
    public AssignmentMetadata AssignmentMetadata { get; set; }
}

public class StructPreview
{
    public string Id { get; set; }
}

public class AssignmentMetadata
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string Profession { get; set; }
    public string AssigningUserName { get; set; }
}

public class CollectionSubscription
{
    public CollectionPreview CollectionPreview { get; set; }
    public List<ResourceSubscription> ResourceSubscriptions { get; set; }
    public int SubscriptionStatus { get; set; }
    public int FeedPriority { get; set; }
    public DateTime SubscriptionTime { get; set; }
    public DateTime LastActivityTime { get; set; }
    public int Grade { get; set; }
}

public class CollectionPreview
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string ImageUrl { get; set; }
}

public class ResourceSubscription
{
    public ResourcePreview ResourcePreview { get; set; }
    public int PositionInCollection { get; set; }
    public string SubscriptionStatus { get; set; }
    public DateTime LastActivityTime { get; set; }
    public int Grade { get; set; }
}

public class ResourcePreview
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public int Grade { get; set; }
    public string ResourceType { get; set; }
}

public class Collection
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public UserPreview CreatingUser { get; set; }
    public List<ResourcePreview> Resources { get; set; }
    public bool IsPublic { get; set; }
    public DateTime LastUpdateTime { get; set; }
    public DateTime CreationTime { get; set; }
    public string CertificateLevel { get; set; }
    public bool IsDeleted { get; set; }
}

public class Resource
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Subtitle { get; set; }
    public int Views { get; set; }
    public DateTime LastUpdateTime { get; set; }
    public List<ResourceComment> Comments { get; set; }
    public bool IsDeleted { get; set; }
    public string ResourceType { get; set; }
    public string Link { get; set; }
    public string FileId { get; set; }
    public QuizData Quiz { get; set; }
}

public class ResourceComment
{
    public string PublisherName { get; set; }
    public string Content { get; set; }
    public DateTime PostTime { get; set; }
}

public class QuizData
{
    public int MinGrade { get; set; }
    public string ResourceName { get; set; }
    public List<Question> Questions { get; set; }
    public int AttemptsCount { get; set; }
    public bool IsSubmitted { get; set; }
    public List<QuizUserAnswer> UserAnswers { get; set; }
    public int CurrentQuestion { get; set; }
    public int Grade { get; set; }
}

public class Question
{
    public string Id { get; set; }
    public string Content { get; set; }
    public int Index { get; set; }
    public bool IsSkipped { get; set; }
    public List<Answer> Answers { get; set; }
}

public class Answer
{
    public string Id { get; set; }
    public string Content { get; set; }
    public bool IsCorrect { get; set; }
}

public class QuizUserAnswer
{
    public string QuestionId { get; set; }
    public List<string> AnswerIds { get; set; }
    public bool? Status { get; set; }
}

public class UserPreview
{
    public string Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
}

public class LoginData
{
    public DateTime LoginTime { get; set; }
    public string IPAddress { get; set; }
    public string DeviceInfo { get; set; }
}



public class Query
{
    private readonly IUserRepository _userRepository;

    public Query(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    public List<User> GetUsers() =>
        new List<User>
        {
            new User
            {
                Id = "1",
                PersonalId = "456456456",
                MilitaryId = "98798787",
                FirstName = "�����",
                LastName = "��",
                Email = "john.doe@example.com",
                PhoneNumber = "123456789",
                City = "��� ����",
                Street = "���� ����",
                HouseNumber = "123",
                Password = "�����1",
                Logins = new List<LoginData>(),
                Note = "���� �� ������ 1",
                ReferringUser = "����� �'",
                Gender = "���",
                BirthDate = new DateTime(1990, 5, 20),
                IsDeleted = false,
                Profession = "���� �����",
                Assignments = new List<UserAssignment>
                {
                    new UserAssignment
                    {
                        StructPreview = new StructPreview { Id = "S1" },
                        AssignmentMetadata = new AssignmentMetadata
                        {
                            Name = "����� 1",
                            Description = "����� �� ����� 1",
                            Profession = "����",
                            AssigningUserName = "����"
                        }
                    }
                },
                CollectionActivitiesHistory = new List<CollectionSubscription>
                {
                    new CollectionSubscription
                    {
                        CollectionPreview = new CollectionPreview { Id = "C1", Name = "���� �'", Description = "����� �'", ImageUrl = "url1" },
                        ResourceSubscriptions = new List<ResourceSubscription>(),
                        SubscriptionStatus = 1,
                        FeedPriority = 2,
                        SubscriptionTime = DateTime.Now,
                        LastActivityTime = DateTime.Now,
                        Grade = 85
                    }
                },
                SubscribedCollections = new List<CollectionSubscription>()
            },
            new User
            {
                Id = "2",
                PersonalId = "123123123",
                MilitaryId = "12312312",
                FirstName = "�'���",
                LastName = "����",
                Email = "jane.smith@example.com",
                PhoneNumber = "987654321",
                City = "��� ���'��",
                Street = "���� ���",
                HouseNumber = "456",
                Password = "�����2",
                Logins = new List<LoginData>(),
                Note = "���� �� ������ 2",
                ReferringUser = "����� �'",
                Gender = "����",
                BirthDate = new DateTime(1992, 3, 15),
                IsDeleted = false,
                Profession = "����� �����",
                Assignments = new List<UserAssignment>
                {
                    new UserAssignment
                    {
                        StructPreview = new StructPreview { Id = "S2" },
                        AssignmentMetadata = new AssignmentMetadata
                        {
                            Name = "����� 2",
                            Description = "����� �� ����� 2",
                            Profession = "�����",
                            AssigningUserName = "����"
                        }
                    }
                },
                CollectionActivitiesHistory = new List<CollectionSubscription>(),
                SubscribedCollections = new List<CollectionSubscription>
                {
                    new CollectionSubscription
                    {
                        CollectionPreview = new CollectionPreview { Id = "C2", Name = "���� �'", Description = "����� �'", ImageUrl = "url2" },
                        ResourceSubscriptions = new List<ResourceSubscription>(),
                        SubscriptionStatus = 1,
                        FeedPriority = 1,
                        SubscriptionTime = DateTime.Now,
                        LastActivityTime = DateTime.Now,
                        Grade = 90
                    }
                }
            }
        };

    public List<Collection> GetCollections() =>
        new List<Collection>
        {
            new Collection
            {
                Id = "C1",
                Name = "���� 1",
                Description = "��� ����� 1",
                CreatingUser = new UserPreview { Id = "1", FirstName = "�����", LastName = "��" },
                Resources = new List<ResourcePreview>
                {
                    new ResourcePreview
                    {
                        Id = "R1",
                        Title = "���� 1",
                        Description = "��� ���� 1",
                        Grade = 5,
                        ResourceType = "�����"
                    },
                    new ResourcePreview
                    {
                        Id = "R2",
                        Title = "���� 2",
                        Description = "��� ���� 2",
                        Grade = 4,
                        ResourceType = "����"
                    },
                    new ResourcePreview
                    {
                        Id = "R3",
                        Title = "���� 3",
                        Description = "��� ���� 3",
                        Grade = 3,
                        ResourceType = "�����"
                    }
                },
                IsPublic = true,
                CreationTime = DateTime.Now,
                LastUpdateTime = DateTime.Now,
                CertificateLevel = "�����",
                IsDeleted = false
            },
            new Collection
            {
                Id = "C2",
                Name = "���� 2",
                Description = "��� ����� 2",
                CreatingUser = new UserPreview { Id = "2", FirstName = "�'���", LastName = "����" },
                Resources = new List<ResourcePreview>
                {
                    new ResourcePreview
                    {
                        Id = "R4",
                        Title = "���� 4",
                        Description = "��� ���� 4",
                        Grade = 5,
                        ResourceType = "�������"
                    },
                    new ResourcePreview
                    {
                        Id = "R5",
                        Title = "���� 5",
                        Description = "��� ���� 5",
                        Grade = 4,
                        ResourceType = "�����"
                    },
                    new ResourcePreview
                    {
                        Id = "R6",
                        Title = "���� 6",
                        Description = "��� ���� 6",
                        Grade = 2,
                        ResourceType = "����"
                    }
                },
                IsPublic = false,
                CreationTime = DateTime.Now,
                LastUpdateTime = DateTime.Now,
                CertificateLevel = "�����",
                IsDeleted = false
            }
        };

    public List<Resource> GetResources() =>
        new List<Resource>
        {
            new Resource
            {
                Id = "R1",
                Name = "���� 1",
                Title = "����� C#",
                Description = "����� ���� �-C#",
                Subtitle = "������ �������",
                Views = 1000,
                LastUpdateTime = DateTime.Now,
                Comments = new List<ResourceComment>
                {
                    new ResourceComment
                    {
                        PublisherName = "�'���",
                        Content = "���� �����!",
                        PostTime = DateTime.Now
                    },
                    new ResourceComment
                    {
                        PublisherName = "����",
                        Content = "���� �����!",
                        PostTime = DateTime.Now
                    },
                    new ResourceComment
                    {
                        PublisherName = "���",
                        Content = "����� ����!",
                        PostTime = DateTime.Now
                    }
                },
                IsDeleted = false,
                ResourceType = "�����",
                Link = "https://example.com/resource1",
                FileId = "F1",
                Quiz = new QuizData
                {
                    MinGrade = 60,
                    ResourceName = "����� C#",
                    Questions = new List<Question>
                    {
                        new Question
                        {
                            Id = "Q1",
                            Content = "�� �� C#?",
                            Index = 1,
                            IsSkipped = false,
                            Answers = new List<Answer>
                            {
                                new Answer { Id = "A1", Content = "��� �����", IsCorrect = true },
                                new Answer { Id = "A2", Content = "��� �� ���", IsCorrect = false }
                            }
                        },
                        new Question
                        {
                            Id = "Q2",
                            Content = "�� �� .NET Framework?",
                            Index = 2,
                            IsSkipped = false,
                            Answers = new List<Answer>
                            {
                                new Answer { Id = "A1", Content = "����� �����", IsCorrect = true },
                                new Answer { Id = "A2", Content = "���� ������", IsCorrect = false }
                            }
                        }
                    },
                    AttemptsCount = 2,
                    IsSubmitted = false,
                    UserAnswers = new List<QuizUserAnswer>(),
                    CurrentQuestion = 0,
                    Grade = 85
                }
            },
            new Resource
            {
                Id = "R2",
                Name = "���� 2",
                Title = "���� ASP.NET",
                Description = "����� �-ASP.NET Core",
                Subtitle = "����� ���",
                Views = 500,
                LastUpdateTime = DateTime.Now,
                Comments = new List<ResourceComment>
                {
                    new ResourceComment
                    {
                        PublisherName = "�����",
                        Content = "������!",
                        PostTime = DateTime.Now
                    },
                    new ResourceComment
                    {
                        PublisherName = "�����",
                        Content = "���� �����!",
                        PostTime = DateTime.Now
                    }
                },
                IsDeleted = false,
                ResourceType = "����",
                Link = "https://example.com/resource2",
                FileId = "F2",
                Quiz = new QuizData
                {
                    MinGrade = 70,
                    ResourceName = "���� ASP.NET",
                    Questions = new List<Question>
                    {
                        new Question
                        {
                            Id = "Q1",
                            Content = "�� �� ASP.NET?",
                            Index = 1,
                            IsSkipped = false,
                            Answers = new List<Answer>
                            {
                                new Answer { Id = "A1", Content = "����� ����� ���", IsCorrect = true },
                                new Answer { Id = "A2", Content = "��� �����", IsCorrect = false }
                            }
                        },
                        new Question
                        {
                            Id = "Q2",
                            Content = "�� ������ �-ASP.NET Core?",
                            Index = 2,
                            IsSkipped = false,
                            Answers = new List<Answer>
                            {
                                new Answer { Id = "A1", Content = "����� ���������", IsCorrect = true },
                                new Answer { Id = "A2", Content = "����� ����", IsCorrect = false }
                            }
                        }
                    },
                    AttemptsCount = 1,
                    IsSubmitted = false,
                    UserAnswers = new List<QuizUserAnswer>(),
                    CurrentQuestion = 0,
                    Grade = 90
                }
            }
        };
}


namespace candidateDammyData
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            // Register GraphQL server and query types
            services
                .AddGraphQLServer()
                .AddQueryType<Query>();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                // Map GraphQL endpoint
                endpoints.MapGraphQL();
            });
        }
    }
}


//[ApiController]
//[Route("api/[controller]")]
//public class LoginController : ControllerBase
//{
//    public static readonly List<User> Users = new List<User>
//    {
//        new User
//        {
//            Id = "1",
//            Email = "john.doe@example.com",
//            Password = "s3cret"
//        },
//        new User
//        {
//            Id = "2",
//            Email = "jane.smith@example.com",
//            Password = "s3cret"
//        }
//    };

//    [HttpPost]
//    public IActionResult Login([FromBody] UserLoginModel loginModel)
//    {
//        var user = Users.FirstOrDefault(u => u.PersonalId == loginModel.PersonalId && u.MilitaryId == loginModel.MilitaryId);
//        if (user == null)
//        {
//            return Unauthorized();
//        }


//        var sessionId = Guid.NewGuid().ToString();

//        return Ok(new { SessionId = sessionId });
//    }
//}

//public class UserLoginModel
//{
//    public string PersonalId { get; set; }
//    public string MilitaryId { get; set; }
//}
