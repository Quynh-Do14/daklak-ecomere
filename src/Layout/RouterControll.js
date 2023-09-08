import React from 'react'
import HomePage from '../components/HomePage'
import DetailTour from '../components/Tour/DetailTour'

const RouterControl = [
    {
        href: '/',
        exact: true,
        main: () => <HomePage />
    },

    {
        href: "/DetailProduct",
        exact: false,
        main: () => <DetailTour />
    },
]

export default RouterControl