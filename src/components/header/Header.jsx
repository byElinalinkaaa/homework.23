import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBasket } from '../../store/basket/basketSlice'
import BusketButton from './BusketButton'
import styledComponents from 'styled-components'
import { uiActions } from '../../store/ui/uiSlice'
import { styled } from '@mui/system'

const Header = ({ onShowBasket }) => {
  const items = useSelector((state) => state.basket.items)
  const themeMode = useSelector((state) => state.ui.themeMode)
  const [animationClass, setAnimationClass] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  const calculateTotalAmount = () => {
    // const sum = items.reduce((s, item) => {
      // return s + item.amount
    }

    // return sum
  // }

  useEffect(() => {
    setAnimationClass('bump')

    const id = setTimeout(() => {
      setAnimationClass('')
    }, 300)

    return () => {
      clearTimeout(id)
    }
  }, [items])

  const themeChangeHandler = () => {
    const theme = themeMode === 'light' ? 'dark' : 'light'
    dispatch(uiActions.changeTheme(theme))
  }

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BusketButton
        className={animationClass}
        onClick={onShowBasket}
        count={calculateTotalAmount()}
      />
      <ThemeButton onClick={themeChangeHandler}>theme</ThemeButton>
     
    </Container>
  );
}

export default Header

const Container = styled('header')(({ theme }) => ({
  position: 'fixed',
  top: '0',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '6.3125rem',
  backgroundColor: theme.palette.primary.light,
  padding: '0 7.5rem',
  alignItems: 'center',
  zIndex: '1',
}))

const Logo = styledComponents.p`
  font-weight: 600;
  font-size: 2.375rem;
  line-height: 3.5625rem;
  color: #ffffff;
  margin: 0;
`
const ThemeButton = styledComponents.button`
  background-color: rgb(1,0,64);
  color:white ;
  padding:10px 25px;
  border:none;
  border-radius:15px;
  font-size:20px;
`;
