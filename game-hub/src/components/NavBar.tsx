import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Prop {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch} : Prop) => {
  return (
    <>
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Image src={logo} boxSize='60px'></Image>
            <SearchInput onSearch={onSearch}></SearchInput>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    </>
  )
}

export default NavBar