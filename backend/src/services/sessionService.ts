import { Session } from '../models/sessionModel';

export const startSession = async (category: string, notes?: string) => {
  return await Session.create({
    category,
    notes,
    startTime: new Date()
  });
};

export const stopSession = async () => {
  const session = await Session.findOne({
    where: { endTime: null },
    order: [['startTime', 'DESC']]
  });

  if (!session) throw new Error('No session in progress');

  session.endTime = new Date();
  await session.save();
  return session;
};

export const getSessions = async () => {
  return await Session.findAll({ order: [['startTime', 'DESC']] });
};
