import request from 'supertest';
import app from '../app';
import { formatResponse } from '../utils/responseFormatter';

jest.mock('../utils/responseFormatter', () => ({
	formatResponse: jest.fn(),
}));

describe('GET /test', () => {
	it('should return a correctly formatted response', async () => {
		(formatResponse as jest.Mock).mockReturnValue({
			id: '1',
			name: 'test',
		});

		const response = await request(app).get('/api/test');

		expect(formatResponse).toHaveBeenCalledWith({
			id: '1',
			name: 'test',
		});

		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			id: '1',
			name: 'test',
		});
	});

	it('should return 404 for unknown routes', async () => {
		const response = await request(app).get('/unknown-route');
		expect(response.status).toBe(404);
	});
});
