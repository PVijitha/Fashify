namespace Ecart.Domain.Entity
{
    public class PaymentDetails: BaseEntity
    {
        public string PaymentId { get; set; }

        public string TransactionId { get; set; }

        public string PaymentStatus { get; set; }

        public DateTime PaymentCompleteTime { get; set; }

        public Guid Userid { get; set; }
    }
}
