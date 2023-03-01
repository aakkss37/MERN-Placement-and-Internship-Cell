import mongoose from "mongoose";

const statisticDataSchema = new mongoose.Schema({

	year: { type: Date, required: true, unique: true },
	heighestCTC: { type: Number, required: true },
	lowestCTC: { type: Number, required: true },
	averageCTC: { type: Number, required: true },
	totalCompany: { type: Number, required: true },
	totalOffers: { type: Number, required: true },
	avobe_5_lpa_CTC: { type: Number, required: true },
	avobe_10_lpa_CTC: { type: Number, required: true },
	avobe_15_lpa_CTC: { type: Number, required: true },

})

const StatisticData = mongoose.model('StatisticData', statisticDataSchema);

export default  StatisticData;


