import {defineStore} from 'pinia'

interface SalesItem {
	id: number,
	name: string,
	description: string,
	article: string,
	img: string,
	count: number,
	price: number,
	fullPrice: number,
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
				name: 'Вытяжное устройство G2H',
				description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
				article: 'G2H1065',
				img: 'G2H1065',
				count: 2,
				price: 12644,
			},
			{
				id: 3,
				name: 'Вытяжное устройство G2H',
				description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
				article: 'G2H1065',
				img: 'G2H1065',
				count: 1,
				price: 12644,
			},

		],
		fullPrice: 0
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
		}
	},
	getters: {}
})