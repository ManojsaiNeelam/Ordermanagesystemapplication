using Webapientitylib;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Prepare Database Connection string
builder.Services.AddDbContext<CustomerContext>(options => 
options.UseSqlServer(
            builder.Configuration.GetConnectionString("AvinyaConnection")
    ));// In built Dependency Injection
builder.Services.AddScoped<Mediatory>();
// ? Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3002",
        policy =>
        {
            policy.WithOrigins("http://localhost:3002","http://localhost:3000") // React frontend
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowLocalhost3002"); 
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
