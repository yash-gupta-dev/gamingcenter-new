import { db } from "../models";

export const createAssociations = () => {
    // User Auth
    db.User.hasMany(db.UserAuth, { foreignKey: 'user_id', as: "userAuths" });
    db.UserAuth.belongsTo(db.User, { foreignKey: 'user_id', as: 'user' });
        
    // Forget Password
    db.User.hasMany(db.ForgetPassword, { foreignKey: 'user_id' });
    db.ForgetPassword.belongsTo(db.User, { foreignKey: 'user_id' });
    
    // Refresh Tokens
    db.User.hasMany(db.RefreshToken, { foreignKey: 'user_id' });
    db.RefreshToken.belongsTo(db.User, { foreignKey: 'user_id' });
    
    // Notifications
    db.User.hasMany(db.Notification, { foreignKey: 'user_id' });
    db.Notification.belongsTo(db.User, { foreignKey: 'user_id' });
}