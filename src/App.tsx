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
	const pizzas = pizzaData
	const numPizzas = pizzas.length

	return (
		<div className='menu'>
			<h2>Our menu</h2>
			{numPizzas > 0 ? (
				<>
					<p>Hehe {numPizzas} PIZZZZZZAS</p>
					<ul className='pizzas'>
						{pizzas.map((el, idx) => (
							<Pizza
								photoName={el.photoName}
								name={el.name}
								ingredients={el.ingredients}
								price={el.price}
								soldOut={el.soldOut}
								key={idx}
							/>
						))}
					</ul>
				</>
			) : (
				<p>We are still working on the menu</p>
			)}
		</div>
	)
}

function Pizza({ photoName, name, ingredients, price, soldOut }) {
	return (
		<li className={`pizza ${soldOut && 'sold-out'}`}>
			<img src={'/' + photoName} alt={name} />
			<div className='pizza_info'>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				<span>{soldOut ? 'SOLD OUT' : `Price: ${price}`}</span>
			</div>
		</li>
	)
}

function Footer() {
	const hour = new Date().getHours()
	const openHour = 12
	const closeHour = 22
	const [message, setMessage] = useState('')
	const isOpen = hour >= openHour && hour <= closeHour

	useEffect(() => {
		if (isOpen) {
			setMessage("We're currently open")
		} else {
			setMessage("Sorry, we're close")
		}
	}, [])

	return (
		<footer className='footer'>
			<div className='order'>
				{!isOpen ? message : `We're working from ${openHour}:00 to ${closeHour}`}
				{isOpen && <button className='btn'>Order now</button>}
			</div>
		</footer>
	)
}

export default App
