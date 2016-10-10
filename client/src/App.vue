<template>
	<div class="app" style="height:100%;">
		<loading :show="isLoading" position="absolute"></loading>
		<view-box v-ref:view-box>

			<router-view
					:transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"
			></router-view>

		</view-box>

		<toast v-ref:info_tips type="text"></toast>
	</div>
</template>

<script>
	import store from './vuex/store'
	import { Tabbar, TabbarItem, Loading, ViewBox, Toast } from 'vux/src/components/'

	export default{
		components: {
			Tabbar,
			TabbarItem,
			Loading,
			ViewBox,
			Toast
		},
		store: store,
		vuex: {
			getters: {
				route: function(state){ return state.route },
				isLoading: function(state){ return state.isLoading },
				direction: function(state){ return state.direction }
			}
		},
		data () {
			return {
				routerTransition: {
					forward: 'slideRL',
					back: 'slideLR'
				}
			}
		},
		methods: {
			scrollTop () {
				this.$refs.viewBox.$els.viewBoxBody.scrollTop = 0
			}
		},
		computed: {
		}
	}
</script>

<style>

	html, body {
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}
	body {
		background-color: #fbf9fe;
	}
	/* v-r-transition, default is {forward: 'forward', back: 'back'}*/
	.forward-enter, .forward-leave {
		transform: translate3d(-100%, 0, 0);
	}
	.back-enter, .back-leave {
		transform: translate3d(100%, 0, 0);
	}


	.weui_tabbar_icon + .weui_tabbar_label {
		margin-top: 0!important;
	}
	.vux-header-box {
		z-index: 100;
		position: absolute;
		width: 100%;
		left: 0;
		top: 0;
	}
	.weui_tab_bd {
		padding: 0!important;
	}
	/**
	* vue-router transition
	*/
	.vux-pop-out-transition,
	.vux-pop-in-transition {
		width: 100%;
		animation-duration: 0.5s;
		animation-fill-mode: both;
		backface-visibility: hidden;
	}
	.vux-pop-out-enter,
	.vux-pop-out-leave,
	.vux-pop-in-enter,
	.vux-pop-in-leave {
		will-change: transform;
		height: 100%;
		position: absolute;
		left: 0;
	}
	.vux-pop-out-enter {
		animation-name: popInLeft;
	}
	.vux-pop-out-leave {
		animation-name: popOutRight;
	}
	.vux-pop-in-enter {
		perspective: 1000;
		animation-name: popInRight;
	}
	.vux-pop-in-leave {
		animation-name: popOutLeft;
	}
	@keyframes popInLeft {
		from {
			transform: translate3d(-100%, 0, 0);
		}
		to {
			transform: translate3d(0, 0, 0);
		}
	}
	@keyframes popOutLeft {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(-100%, 0, 0);
		}
	}
	@keyframes popInRight {
		from {
			transform: translate3d(100%, 0, 0);
		}
		to {
			transform: translate3d(0, 0, 0);
		}
	}
	@keyframes popOutRight {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(100%, 0, 0);
		}
	}
</style>