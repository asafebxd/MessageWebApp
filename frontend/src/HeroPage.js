
import  "./HeroPage.css";


const Login = (props) => {
     return (

        <div className="background">
            <div className="register-box">
                <img className="logo" src={require('./logo.jpeg')} />
                <h1>
                    Register Here
                </h1>
                <form>
                    <p>e-mail</p>
                    <input type="e-mail" name="" placeholder="e-mail"/>
                    <p>Username</p>
                    <input type="text" name="" placeholder="Username"/>
                    <p>Password</p>
                    <input type="password" name="" placeholder="Password"/>
                    <input type="submiit" name ="" value ="Register"/>
                    <a href ="./Login.js">Already Registered? Login here.</a> 
                    

                </form>
            </div>

        </div>
);
       
        

}

export default Login;