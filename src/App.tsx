import React,{useState} from 'react';
import { Dropdown } from './components/Dropdown';
import './app.css'
import {DropdownHeader } from './components/DropdownHeader';
import { useEffect } from 'react';


export interface langProps {
	id: number,
	name: string,
	selected: boolean,
	icon: string
}
function App() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [langArray, setLangArray] = useState<langProps[]>([])
	const [searchValue, setSearchValue] = useState<string>('')
	const [selected, setSelected] = useState<boolean>(false);
	const [selectedArray, setSelectedArray] = useState<langProps[]>([])

	const ToggleDropdown = () => setIsOpen(!isOpen);
	useEffect(()=>{
		const langArray= [
			{"id":1, "name": "Русский", "selected": false, "icon": 'russian.png'}, 
			{"id":2, "name": "Английский", "selected": false, "icon": 'english.png'}, 
			{"id":3, "name": "Испанский", "selected": false, "icon": 'spanish.png'}, 
			{"id":4, "name": "Немецкий", "selected": false, "icon": 'german.png'}, 
			{"id":5, "name": "Итальянский", "selected": false, "icon": 'italian.png'}, 
			{"id":6, "name": "Польский", "selected": false, "icon": 'poland.png'}
		]
		setLangArray(langArray)
	},[])

	const searchHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value.toLowerCase())
	}
	const checkedHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
		const newLangArray = langArray.map(el=>{
			if(el.name==e.target.value){
				return {
					...el,
					selected: !el.selected
				}
			}
			return el
		})
		setLangArray(newLangArray)
		setSelectedArray(newLangArray.filter(el=>el.selected&&el))
	}
	const uncheckHandler = (lang:langProps) => {
		const newLangArray = langArray.map(el=>{
			if(el.id==lang.id){
				return {
					...el,
					selected: !el.selected
				}
			}
			return el
		})
		setLangArray(newLangArray)
		setSelectedArray(newLangArray.filter(el=>el.selected&&el))
	}

  return (
	<main className="page">
		<DropdownHeader 
			selectedArray={selectedArray}
			ToggleDropdown={ToggleDropdown} 
			isOpen={isOpen}
			uncheckHandler={uncheckHandler} />
		<Dropdown 
			isOpen={isOpen} 
			langArray={langArray}
			searchHandler ={searchHandler}
			searchValue={searchValue}
			checkedHandler={checkedHandler}
			selected={selected}
			/>
	</main>
  );
}

export default App;
