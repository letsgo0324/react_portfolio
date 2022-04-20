import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Popup = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<AnimatePresence>
			{open && (
				<motion.aside
					className='popup'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, ransition: { delay: 0.5 } }}>
					<motion.div
						className='pop_con'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
						exit={{ opacity: 0, transition: { duration: 0.5 } }}>
						{props.children}
					</motion.div>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});

export default Popup;
