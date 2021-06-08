import GoogleLogin from 'react-google-login';

const Login = (props) => {
  const { onLoginGoogle } = props;
  return (
    <div className={cx('login')}>
      <GoogleLogin
         clientId='google-login-key'
         render={(props: any) => (
           <div onClick={props.onClick} />
         )}
         onSuccess={result => onLoginGoogle(result)}
         onFailure={result => console.log(result)}
         cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;