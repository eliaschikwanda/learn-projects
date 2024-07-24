import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <>
    <InputGroup>
        <InputLeftElement children={<BsSearch/>}></InputLeftElement>
        <Input borderEndRadius={20} placeholder='Search Games' variant={'filled'}></Input>
    </InputGroup>
    </>
  )
}

export default SearchInput