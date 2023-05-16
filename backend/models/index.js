require('../config/connection');

module.exports = {
    Allergies: require('./Allergies'),
    Appointments: require('./Appointments'),
    CareTeam: require('./CareTeam'),
    FamilyHistory: require('./FamilyHistory'),
    HealthConditions: require('./HealthConditions'),
    Hospitalizations: require('./Hospitalizations'),
    Medications: require('./Medications'),
    SocialHistory: require('./SocialHistory'),
    Surgeries: require('./Surgeries'),
    Vaccinations: require('./Vaccinations')
}