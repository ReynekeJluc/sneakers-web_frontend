import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			marginTop: theme.spacing(2),
		},
	},
}));

const MyPagination = ({ totalPages, currentPage, onPageChange }) => {
	const classes = useStyles();

	const handlePageChange = (event, page) => {
		onPageChange(page);
	};

	return (
		<div className={classes.root}>
			<Pagination
				count={totalPages}
				page={currentPage}
				onChange={handlePageChange}
				color='primary'
			/>
		</div>
	);
};

export default MyPagination;
