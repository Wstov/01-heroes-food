import React from 'react'
import Producto from './Producto'

const Menu = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="display-2 text-center mt-3 mb-0" editable="inline"> Menu</h2>
                    <h2 class="text-muted h1 mb-5" editable="inline">Starters</h2>
                </div>
            </div>
            <div class="row">
                <Producto/>
                <Producto/>
                <Producto/>
                <Producto/>
                <Producto/>
                <Producto/>
            </div>
        </div>
    )
}

export default Menu
