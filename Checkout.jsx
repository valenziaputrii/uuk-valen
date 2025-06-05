import React, { useState } from 'react';

const paymentMethods = {
  'E-Wallet': [
    { value: 'OVO', label: 'OVO', logo: '/public/ovo.png' },
    { value: 'GO-PAY', label: 'GO-PAY', logo: '/public/gopay.png' }
  ],
  'Transfer Bank': [
    { value: 'BANK XYZ', label: 'BANK XYZ', logo: '/public/ovo.png'}
  ],
  'Transfer Virtual Account': [
    { value: 'VA MANDIRI', label: 'BANK MANDIRI', logo: '/public/mandiri.png' },
    { value: 'VA BCA', label: 'BANK BCA', logo: '/public/bca.png' },
    { value: 'VA BNI', label: 'BANK BNI', logo: '/public/bni.png' },
    { value: 'VA BRI', label: 'BANK BRI', logo: '/public/bri.png' }
  ],
  'Kartu Kredit': [
    { value: 'Credit Card', label: 'VISA / MASTERCARD', logo: '/public/visa.png', logo: '/public/master.png'}
  ],
  'Minimarket': [
    { value: 'INDOMARET', label: 'INDOMARET', logo: '/public/indomaret.png' },
    { value: 'ALFAMART', label: 'ALFAMART', logo: '/public/alfamart.png' }
  ]
};

const Checkout = () => {
  const [voucher, setVoucher] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <h2 style={styles.title}>UX Designer: Digital Product Development</h2>
            <div style={styles.instructorWrapper}>
              <img src="/muka.jpg" alt="Instruktur" style={styles.instructorImage} />
              <p style={styles.instructor}>Dimontihrif Nelasapaba</p>
            </div>
            <p style={styles.category}>Kategori: UI/UX</p>
            <p style={styles.price}>Rp. 0</p>
          </div>
          <div style={styles.posterImageWrapper}>
            <img src="/poster2.jpg" alt="Course Poster" style={styles.posterImage} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        {/* Payment Method */}
        <div style={styles.paymentSection}>
          <h3>Metode Pembayaran</h3>
          {Object.entries(paymentMethods).map(([groupTitle, methods]) => (
            <div key={groupTitle} style={styles.methodGroup}>
              <h4>{groupTitle}</h4>
              <div style={styles.boxGroup}>
                {methods.map(({ value, label, logo }) => (
                  <label
                    key={value}
                    style={{
                      ...styles.paymentBox,
                      borderColor: selectedMethod === value ? '#a1872d' : '#ccc',
                      backgroundColor: selectedMethod === value ? '#fff9e6' : '#fff'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={value}
                      checked={selectedMethod === value}
                      onChange={handleMethodChange}
                      style={styles.radio}
                    />
                    {logo && <img src={logo} alt={label} style={styles.logo} />}
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Payment Summary */}
        <div style={styles.summarySection}>
          <h3>Ringkasan Pembayaran</h3>
          <p>Total Price: Rp. 0</p>
          <p>Discount: Rp. 0</p>
          <p>Potongan Voucher: Rp. 0</p>

          <input
            type="text"
            placeholder="Input voucher code"
            value={voucher}
            onChange={(e) => setVoucher(e.target.value)}
            style={styles.voucherInput}
          />
          <button style={styles.useButton}>Gunakan</button>

          <h4>Total Payment: Rp. 0</h4>
          <button style={styles.payButton}>Bayar Course</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
  fontFamily: 'sans-serif',
  padding: '40px',
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: '#f9f9f9',
  boxSizing: 'border-box',
},
  header: {
    backgroundColor: '#fff5d1',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  headerLeft: {
    flex: 1,
    minWidth: '300px',
  },
  title: {
    fontSize: '22px',
    marginBottom: '8px',
    color: '#a1872d',
  },
  instructorWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '4px',
  },
  instructorImage: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  instructor: {
    fontSize: '14px',
  },
  category: {
    fontSize: '13px',
    color: '#666',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
  },
  posterImageWrapper: {
    flex: '0 0 250px',
    textAlign: 'right',
    paddingTop: '20px',
  },
  posterImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  content: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
  },
  paymentSection: {
    flex: 3,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    minWidth: '300px',
  },
  methodGroup: {
    marginTop: '20px',
  },
  boxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '10px',
  },
  paymentBox: {
    border: '2px solid #ccc',
    borderRadius: '8px',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    transition: '0.2s',
  },
  radio: {
    accentColor: '#a1872d',
  },
  logo: {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  },
  summarySection: {
    flex: 1.5,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #eee',
    minWidth: '250px',
  },
  voucherInput: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    marginTop: '10px',
    marginBottom: '10px',
  },
  useButton: {
    padding: '6px 16px',
    backgroundColor: '#a1872d',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    marginBottom: '20px',
    cursor: 'pointer',
  },
  payButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#a1872d',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Checkout;