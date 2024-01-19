namespace Ecart.Domain.Entity
{
    public class ApplicationUser: BaseEntity
    {
        public string UserName { get; set; }

        public int phone { get; set; }

        public bool isActive { get; set; }
    }
}
