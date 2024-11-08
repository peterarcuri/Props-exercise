function InventoryItem ({name, type, quantity=0, price=0})
{

	const lowStockQuanity = 5;
	const thresholdValue = 1000;

	const valueTotal = price * quantity;

	return (
		<div>
			<h2>{name} ({type})</h2>
			{
				quantity < lowStockQuanity && <Message> <p><span>☢️</span> Low Stock! {quantity} remained.</p></Message>
			}
			{
				valueTotal > thresholdValue && <Message><p><span>💰</span> High value! - extra protection suggested!</p></Message>
			}
		</div>
	);
}
