import { CronJob } from 'cron';
import { db } from '../models';
import { Op } from 'sequelize';
import { now } from '../utils/date.utils';

export const deleteExpiredOtps = () => {
    new CronJob('*/10 * * * *', async () => {
        await db.Otp.destroy({
            where: {
                created_at: {
                    [Op.lt]: now()
                }
            }
        });
    },
        null,
        true,
    );
}