import React, { useContext, useEffect, useRef } from 'react'
import { Logo, View, Flex, Link, Stack } from 'components'
import { AuthContext } from 'context'
import { LOGOUT_USER } from 'context/types/Auth.types'
import { useHistory } from 'react-router-dom'
import { NavContext } from 'context/NavHeightContext'

const Header = () => {

    const { dispatch, isAuthenticated } = useContext(AuthContext);

    const heightRef = useRef(null);

    const { setHeight } = useContext(NavContext)

    const history = useHistory();

    const logoutUsers = async _ => {
        await dispatch({ type : LOGOUT_USER });
        history.push('/');
    }

    useEffect(() => {
        setHeight(heightRef.current.offsetHeight)
    },[])

    return (
       <View as="header" width={[10/12]} m="0 auto" ref={heightRef}> 
          <Flex>
            <Link to="/">
                <Logo />
            </Link>
            <Flex alignItems="center" justifyContent="space-between" width="100%">
                <Stack gap={5} ml={4}>
                    <Link to="/" color={"text.3"}>
                        Home
                    </Link>
                    <Link to="/find-jobs" color={"text.3"}>
                        Find jobs
                    </Link>
                    <Link to="/applied-jobs" color={"text.3"}>
                        Applied jobs
                    </Link>
                </Stack>
               <Stack gap={5}>
                    {
                        !isAuthenticated() ?
                        <>
                            <Link to="/auth/login">
                                Login
                            </Link>
                            <Link to="/auth/register" type="outline" rounded="md">
                                Register Now
                            </Link>
                        </>
                        : <button onClick={logoutUsers}> USER </button>
                    }
               </Stack>
            </Flex>
          </Flex>
       </View>
    )
}

export default Header