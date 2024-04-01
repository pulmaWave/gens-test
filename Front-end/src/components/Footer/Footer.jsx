import './Footer.css'

export const Footer = () => {
  return (
    <div
      className='container'
      style={{
        textAlign: 'center',
        backgroundColor: '#ffffff'
      }}
    >
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p
          style={{
            marginBottom: '20px',
            fontSize: '10px',
            maxWidth: '600px',
            color: '#c4c4c4'
          }}
        >
          This website is created as part of Hlsolutions program. The materials
          contained on this website are provided for general information only
          and do not constitute any form of advice. HLS assumes no
          responsibility for the accuracy of any particular statement and
          accepts no liability for any loss or damage which may arise from
          reliance on the information contained on this site.
        </p>
      </div>
      <b>Copyright 2021 HLS</b>
    </div>
  )
}
