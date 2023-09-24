import { useEffect, useState } from 'react'
import { pizzaData } from './data.js'

function App() {
	return (
		<main className='container'>
			<Header />
			<Menu />
			<Footer />
		</main>
	)
}

function Header() {
	return (
		<header className={'header'}>
			<h1>Pizza</h1>
		</header>
	)
}

function Menu() {
	return (
		<div className='menu'>
			<h2>Our menu</h2>
			<p>Hehe</p>
			<div className='pizzas'>
				{pizzaData.map((el, idx) => (
					<Pizza
						photoName={'/' + el.photoName}
						name={el.name}
						ingredients={el.ingredients}
						price={el.price}
						key={idx}
					/>
				))}
			</div>
		</div>
	)
}

function Pizza(props) {
	return (
		<div className='pizza'>
			<img src={props.photoName} alt={props?.name} />
			<h3>{props?.name}</h3>
			<p>{props?.ingredients}</p>
			<span>Price: {props?.price}</span>
		</div>
	)
}

function Footer() {
	const hour = new Date().getHours()
	const openHour = 12
	const closeHour = 22
	const [message, setMessage] = useState('')

	useEffect(() => {
		if (hour >= openHour && hour <= closeHour) {
			setMessage("We're currently open")
		} else {
			setMessage("Sorry, we're close")
		}
	}, [])

	return <footer className='footer'>{message}</footer>
}

export default App
