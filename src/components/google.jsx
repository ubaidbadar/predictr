import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function Google() {
    return (
        <GoogleOAuthProvider clientId="892485314218-ihjgqgvlsgr1bckabhs1bmumcgl49fs3.apps.googleusercontent.com">
            <GoogleLogin onSuccess={() => {
                
            }} />
        </GoogleOAuthProvider>
    )
}