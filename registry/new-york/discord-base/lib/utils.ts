export function formatDate(date: Date, use24Hour = false): string {
	const now = new Date();
	const diff = now.getTime() - date.getTime();
	const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

	let hours = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hours >= 12 ? " PM" : " AM";

	if (!use24Hour) {
		hours %= 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
	}

	const formattedTime = `${String(hours).padStart(2, "0")}:${String(
		minutes
	).padStart(2, "0")}${use24Hour ? "" : ampm}`;

	if (diffDays === 0) {
		return formattedTime;
	}
	if (diffDays === 1) {
		return `Yesterday ${formattedTime}`;
	}

	const month = date.getMonth() + 1;
	const day = date.getDate();
	const year = date.getFullYear();
	return `${String(month).padStart(2, "0")}/${String(day).padStart(
		2,
		"0"
	)}/${year} ${formattedTime}`;
}
