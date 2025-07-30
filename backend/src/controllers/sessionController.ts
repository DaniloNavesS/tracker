import { Request, Response } from 'express';
import * as sessionService from '../services/sessionService';

export const start = async (req: Request, res: Response) => {
  const { category, notes } = req.body;
  try {
    const session = await sessionService.startSession(category, notes);
    res.status(201).json(session);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const stop = async (_req: Request, res: Response) => {
  try {
    const session = await sessionService.stopSession();
    res.status(200).json(session);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const list = async (_req: Request, res: Response) => {
  try {
    const sessions = await sessionService.getSessions();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
