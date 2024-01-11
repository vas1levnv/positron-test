import {defineStore} from 'pinia'

interface SalesItem {
	id: number,
	name: string,
	description: string,
	article: string,
	img: string,
	count: number,
	price: number,
}

interface State {
	name: string,
	description: string,
	salesList: Array<SalesItem>
}

export const useWebsiteStore = defineStore('websiteStore', {
	state: <State>() => ({
		name: '',
		description: '',
		salesList: [
			{
				id: 1,
				name: 'Вытяжное устройство G2H',
				description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
				article: 'G2H1065',
				img: 'G2H1065',
				count: 1,
				price: 12644,
			},
			{
				id: 2,
				name: 'Вытяжное устройство BXC',
				description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
				article: 'G2H1065',
				img: 'G2H1065',
				count: 2,
				price: 12644,
			},
			{
				id: 3,
				name: 'Вытяжное устройство GHN',
				description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
				article: 'G2H1065',
				img: 'G2H1065',
				count: 1,
				price: 12644,
			},

		],
	}),
	actions: {
		incrementSalesItemCount(id: number) {
			for (let i in this.salesList) {
				if (this.salesList[i].id == id) {
					this.salesList[i].count++
					break;
				}
			}
		},
		decrementSalesItemCount(id: number) {
			for (let i in this.salesList) {
				if (this.salesList[i].id == id && this.salesList[i].count > 1) {
					this.salesList[i].count--
					break;
				}
			}
		},
		deleteSalesItem(id: number) {
			this.salesList = this.salesList.filter(el => el.id !== id)
		}
	},
	getters: {
		countAllItems: (state: State) => {
			return state.salesList.reduce((n, {count}) => n + count, 0)
		},
		priceAllItems: (state: State) => {
			return state.salesList.reduce((acc, item) => acc + (item.count * item.price), 0)
		}
	}
})