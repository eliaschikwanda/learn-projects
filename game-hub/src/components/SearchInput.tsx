import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'

interface Prop {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch} : Prop) => {
    const ref = useRef<HTMLInputElement>(null);
  return (
    <>
    <form action="" onSubmit={(event) => {
        event.preventDefault(); // To prevent posting to the server immediately
        if (ref.current) {onSearch(ref.current.value)};
    }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch/>}></InputLeftElement>
            <Input ref={ref} borderEndRadius={20} placeholder='Search Games' variant={'filled'}></Input>
        </InputGroup>
    </form>
    </>
  )
}

export default SearchInput