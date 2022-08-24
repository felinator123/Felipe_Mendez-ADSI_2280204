import React, { Component } from 'react';
import ('./productos.css');
const list = [
	{
		id:1,
		nombre:"Cien años de soledad",
		year:1967,
	},
	{
		id:2,
		nombre:"El amor en los tiempos de colera",
		year:1985,
	},
	{
		id:3,
		nombre:"Cronica de una muerte anunciada",
		year:1981,
	}
];

class ProductosII extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			list,
		};

		this.Eliminar = 
		this.Eliminar.bind(this);
	}
	
	Eliminar(id) {
		const isNotId = item => item.id !== id;
		const listaActualizada = 
		this.state.list.filter(isNotId);
		this.setState({ list: listaActualizada });
	}
   render() {
      return(
		<table >
			{this.state.list.map(item => 
				 <div key={item.id}>
                   <tr>
                    
                   
					<span>
						{item.nombre} 
					</span>
                    </tr>
                 
                    
					<span>	<tr> 
						<button
							onClick={() => this.Eliminar(item.id)}
							type="button"
						>
						Eliminar
						</button> </tr>
					</span>
               
                   
				</div>
			)}
		
     </table>
      );
   }
}

export default ProductosII;