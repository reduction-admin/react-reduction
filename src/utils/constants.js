// --purple: #6f42c1;
// --pink: #e83e8c;
// --red: #dc3545;
// --orange: #fd7e14;
// --yellow: #ffc107;
// --green: #28a745;
// --teal: #20c997;
// --cyan: #17a2b8;
// --white: #fff;
// --gray: #868e96;
// --gray-dark: #343a40;
// --primary: #6a82fb;
// --secondary: #fc5c7d;
// --success: #45b649;
// --info: #00c9ff;
// --warning: #ffd700;
// --danger: #f85032;
// --light: #f8f9fa;

export const NOTIFICATION_SYSTEM_STYLE = {
  NotificationItem: {
    DefaultStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      borderRadius: '4px',
      fontSize: '14px',
    },

    success: {
      borderTop: 0,
      backgroundColor: '#45b649',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },

    error: {
      borderTop: 0,
      backgroundColor: '#f85032',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },

    warning: {
      borderTop: 0,
      backgroundColor: '#ffd700',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },

    info: {
      borderTop: 0,
      background: 'linear-gradient(to right, #6a82fb, #fc5c7d)',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },
  },

  Title: {
    DefaultStyle: {
      margin: 0,
      padding: 0,
      paddingRight: 5,
      color: '#fff',
      display: 'inline-flex',
      fontSize: 20,
      fontWeight: 'bold',
      // left: '15px',
      // position: 'absolute',
      // top: '50%',
    },
  },

  MessageWrapper: {
    DefaultStyle: {
      display: 'block',
      color: '#fff',
      width: '100%',
    },
  },

  Dismiss: {
    DefaultStyle: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'inherit',
      fontSize: 20,
      color: '#f2f2f2',
      position: 'relative',
      margin: 0,
      padding: 0,
      background: 'none',
      borderRadius: 0,
      opacity: 1,
      width: 20,
      height: 20,
      textAlign: 'initial',
      float: 'none',
      top: 'unset',
      right: 'unset',
      lineHeight: 'inherit',
      // right: '10px',
      // top: '50%',
      // marginTop: '-13px',
      // lineHeight: '11px',
      // width: '25px',
      // height: '25px',
      // outline: '0 !important',
      // textAlign: 'center',
      // padding: '6px 3px 3px 3px',
      // fontWeight: '300',
      // marginLeft: '65px',
    },

    success: {
      // color: '#f0f5ea',
      // backgroundColor: '#45b649'
    },

    error: {
      // color: '#f4e9e9',
      // backgroundColor: '#f85032'
    },

    warning: {
      // color: '#f9f6f0',
      // backgroundColor: '#ffd700'
    },

    info: {
      // color: '#e8f0f4',
      // backgroundColor: '#00c9ff'
    },
  },

  Action: {
    DefaultStyle: {
      background: '#fff',
      borderRadius: '2px',
      padding: '6px 20px',
      fontWeight: 'bold',
      margin: '10px 0 0 0',
      border: 0,
    },

    success: {
      backgroundColor: '#45b649',
      color: '#fff',
    },

    error: {
      backgroundColor: '#f85032',
      color: '#fff',
    },

    warning: {
      backgroundColor: '#ffd700',
      color: '#fff',
    },

    info: {
      backgroundColor: '#00c9ff',
      color: '#fff',
    },
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0,
    },
  },
};
