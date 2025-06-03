import React from 'react';
function TrafficLightSimulator(){
  return (
    <body style={styles.mainBackground}>
    <div style={styles.container}>
      <h2 style={styles.heading}>Traffic Light Simulator</h2>
      <div style={styles.trafficLight}>
        <div style={{ ...styles.light, backgroundColor: 'grey' }} />
        <div style={{ ...styles.light, backgroundColor: 'grey' }} />
        <div style={{ ...styles.light, backgroundColor: 'grey' }} />
      </div>
    </div>
    </body>
  );
};

const styles = {
    mainBackground: {
        backgroundColor:'black'
    },

    container: {
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        marginBottom: '20px',
        fontSize:'10px',
        color:'lightgrey',
    },
    trafficLight: {
        backgroundColor: '#2f2f2f',
        padding: '20px',
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    light: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
    },
};

export default TrafficLightSimulator;
