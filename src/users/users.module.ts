import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { StateUpdaters } from './events/updaters';
import { EventSourcingModule } from 'event-sourcing-nestjs';
import { UserResolver } from './graphql/user.resolver';
import { CommonModule } from 'src/common/common.module';

@Module({
    imports: [
        CqrsModule,
        CommonModule,
        EventSourcingModule.forFeature(),
    ],
    providers: [
        ...CommandHandlers,
        ...EventHandlers,
        ...QueryHandlers,
        ...StateUpdaters,
        UserResolver,
    ],
})
export class UsersModule {}
