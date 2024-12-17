import SectionTitle from './SectionTitle';

const PaymentMethod = () => {
  return (
    <div style={{ marginTop: '40px' }}>
      <SectionTitle text="Payment Method" />
      <div
        style={{
          backgroundColor: 'rgba(33, 33, 33, 1)',
          padding: '20px',
          borderRadius: '16px',
        }}
      >
        {/* Add your payment method content here */}
      </div>
    </div>
  );
};

export default PaymentMethod; 