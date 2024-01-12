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
	installation: boolean,
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
		installation: false,
		salesSwiper: [
			{
				id: 1,
				name: 'BXC',
				description: 'Вытяжное устройство для механической системы вентиляции',
				priceRu: {
					first: 6848,
					second: 56584,
				},
				priceEu: {
					first: 77.60,
					second: 643.86,
				},
				link: "#"
			},
			{
				id: 2,
				name: 'G2H',
				description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
				priceRu: {
					first: 6848,
					second: 56584,
				},
				priceEu: {
					first: 77.60,
					second: 643.86,
				},
				link: "#"
			},
			{
				id: 3,
				name: 'GHN',
				description: 'Вытяжное устройство с датчиком присутствия',
				priceRu: {
					first: 6848,
					second: 56584,
				},
				priceEu: {
					first: 77.60,
					second: 643.86,
				},
				link: "#"
			},
			{
				id: 4,
				name: 'TDA',
				description: 'Вытяжное устройство с датчиком присутствия',
				priceRu: {
					first: 6848,
					second: 56584,
				},
				priceEu: {
					first: 77.60,
					second: 643.86,
				},
				link: "#"
			},
			{
				id: 5,
				name: 'TDA',
				description: 'Вытяжное устройство с датчиком присутствия',
				priceRu: {
					first: 6848,
					second: 56584,
				},
				priceEu: {
					first: 77.60,
					second: 643.86,
				},
				link: "#"
			},
			{
				id: 6,
				name: 'TDA',
				description: 'Вытяжное устройство с датчиком присутствия',
				priceRu: {
					first: 6848,
					second: 56584,
				},
				priceEu: {
					first: 77.60,
					second: 643.86,
				},
				link: "#"
			},
			{
				id: 7,
				name: 'TDA',
				description: 'Вытяжное устройство с датчиком присутствия',
				priceRu: {
					first: 6848,
					second: 56584,
				},
				priceEu: {
					first: 77.60,
					second: 643.86,
				},
				link: "#"
			},
			{
				id: 8,
				name: 'TDA',
				description: 'Вытяжное устройство с датчиком присутствия',
				priceRu: {
					first: 6848,
					second: 56584,
				},
				priceEu: {
					first: 77.60,
					second: 643.86,
				},
				link: "#"
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
		},
		changeInstallation(data:boolean){
			this.installation = data
		},
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