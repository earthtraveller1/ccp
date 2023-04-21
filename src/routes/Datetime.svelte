<script>
	import { format } from '../lib/util';

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let year = 2000;
	let month = 'January';
	let day = 1;
	let hour = 0;
	let minute = 0;
	let second = 0;

	function update() {
		let now = new Date();

		year = now.getFullYear();
		month = months[now.getMonth()];
		day = now.getDay();
		hour = now.getHours();
		minute = now.getMinutes();
		second = now.getSeconds();

	    setTimeout(update, 1000);
	}

    update()

</script>

<p class="inline">{day} {month}, {year} {format(hour)}:{format(minute)}:{format(second)}</p>

<style>
	.inline {
		display: inline;
	}
</style>
