import SectionTitle from './SectionTitle';

const PaymentHistory = () => {
  return (
    <div style={{ marginTop: '40px' }}>
      <SectionTitle text="Payment History" />
      <div
        style={{
          backgroundColor: 'rgba(33, 33, 33, 1)',
          padding: '20px',
          borderRadius: '16px',
        }}
      >
        {/* Add your payment history content here */}
      </div>
    </div>
  );
};

export default PaymentHistory; 