import {
  Route,
  Get,
  Tags,
} from 'tsoa';

@Tags("Root")
@Route('/')
export class RootController {
  @Get()
  getAll() {
    return 'Hello world!';
  }
}
