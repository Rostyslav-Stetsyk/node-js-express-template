import morgan from 'morgan';
import app from './app.ts';
import swaggerUi from 'swagger-ui-express';
import 'dotenv/config';
import swaggerDocs from './config/swagger.ts';

const PORT = process.env.PORT || 3000;

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
	console.log(`Server is running http://localhost:${PORT} 🚀`);
	console.log(`Swagger Docs available at http://localhost:${PORT}/api/docs`);
});
