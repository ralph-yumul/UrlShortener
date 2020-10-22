using Microsoft.Extensions.DependencyInjection;
using NetCore.AutoRegisterDi;
using System.Reflection;

namespace UrlShortener.Web.Utilities.Extensions
{
    public static class ServiceCollectionExtention
    {
        public static IServiceCollection ConfigureDependencies(this IServiceCollection services)
        {
            var assemblies = new string[]
            {
                "EatSilogAvenue.Repository",
                "EatSilogAvenue.Service"
                //"EatSilogAvenue.Utility"
            };

            foreach (var assembly in assemblies)
            {
                services.RegisterAssemblyPublicNonGenericClasses(
                Assembly.Load(assembly))
               .AsPublicImplementedInterfaces(ServiceLifetime.Singleton);
            }
            return services;
        }
    }
}
