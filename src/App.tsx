import React from 'react'
import './App.css'
import { requests } from './axios/api/request'
import { Row } from './components/Row/Row'
import { Banner } from './components/Banner/Banner'
import { Nav } from './components/Nav/Nav'

export const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  )
}
