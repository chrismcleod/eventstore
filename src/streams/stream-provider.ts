import * as eventstore from 'esproto';

import { CommandSubject, CommandSubjectWithData, CommandObservable, CommandObservableWithData } from '../core';

export class StreamProvider {
  public authenticate: CommandSubject;
  public cloneAssignment: CommandSubject;
  public commitAck: CommandSubject;
  public connectToPersistentSubscription: CommandSubjectWithData<eventstore.ConnectToPersistentSubscription$Properties>;
  public createChunk: CommandSubject;
  public createPersistentSubscription: CommandSubjectWithData<eventstore.CreatePersistentSubscription$Properties>;
  public deletePersistentSubscription: CommandSubjectWithData<eventstore.DeletePersistentSubscription$Properties>;
  public deleteStream: CommandSubjectWithData<eventstore.DeleteStream$Properties>;
  public heartbeatResponseCommand: CommandSubject;
  public identifyClient: CommandSubject;
  public persistentSubscriptionAckEvents: CommandSubjectWithData<eventstore.PersistentSubscriptionAckEvents$Properties>;
  public persistentSubscriptionNakEvents: CommandSubjectWithData<eventstore.PersistentSubscriptionNakEvents$Properties>;
  public ping: CommandSubject;
  public prepareAck: CommandSubject;
  public rawChunkBulk: CommandSubject;
  public readAllEventsBackward: CommandSubjectWithData<eventstore.ReadAllEventsBackward$Properties>;
  public readAllEventsForward: CommandSubjectWithData<eventstore.ReadAllEventsForward$Properties>;
  public readEvent: CommandSubjectWithData<eventstore.ReadEvent$Properties>;
  public readStreamEventsBackward: CommandSubjectWithData<eventstore.ReadStreamEventsBackward$Properties>;
  public readStreamEventsForward: CommandSubjectWithData<eventstore.ReadStreamEventsForward$Properties>;
  public replicaLogPositionAck: CommandSubject;
  public replicaSubscriptionRetry: CommandSubject;
  public scavengeDatabase: CommandSubjectWithData<eventstore.ScavengeDatabase$Properties>;
  public slaveAssignment: CommandSubject;
  public subscribeReplica: CommandSubject;
  public subscribeToStream: CommandSubjectWithData<eventstore.SubscribeToStream$Properties>;
  public transactionCommit: CommandSubjectWithData<eventstore.TransactionCommit$Properties>;
  public transactionStart: CommandSubjectWithData<eventstore.TransactionStart$Properties>;
  public transactionWrite: CommandSubjectWithData<eventstore.TransactionWrite$Properties>;
  public unsubscribeFromStream: CommandSubjectWithData<eventstore.UnsubscribeFromStream$Properties>;
  public updatePersistentSubscription: CommandSubjectWithData<eventstore.UpdatePersistentSubscription$Properties>;
  public writeEvents: CommandSubjectWithData<eventstore.WriteEvents$Properties>;
  public authenticated$: CommandObservable<eventstore.IncomingCodes.Authenticated>;
  public badRequest$: CommandObservable<eventstore.IncomingCodes.BadRequest>;
  public clientIdentified$: CommandObservable<eventstore.IncomingCodes.ClientIdentified>;
  public createPersistentSubscriptionCompleted$: CommandObservableWithData<eventstore.IncomingCodes.CreatePersistentSubscriptionCompleted, eventstore.CreatePersistentSubscriptionCompleted$Properties>;
  public dataChunkBulk$: CommandObservable<eventstore.IncomingCodes.DataChunkBulk>;
  public deletePersistentSubscriptionCompleted$: CommandObservableWithData<eventstore.IncomingCodes.DeletePersistentSubscriptionCompleted, eventstore.DeletePersistentSubscriptionCompleted$Properties>;
  public deleteStreamCompleted$: CommandObservableWithData<eventstore.IncomingCodes.DeleteStreamCompleted, eventstore.DeleteStreamCompleted$Properties>;
  public heartbeatRequestCommand$: CommandObservable<eventstore.IncomingCodes.HeartbeatRequestCommand>;
  public notAuthenticated$: CommandObservable<eventstore.IncomingCodes.NotAuthenticated>;
  public notHandled$: CommandObservableWithData<eventstore.IncomingCodes.NotHandled, eventstore.NotHandled$Properties>;
  public persistentSubscriptionConfirmation$: CommandObservableWithData<eventstore.IncomingCodes.PersistentSubscriptionConfirmation, eventstore.PersistentSubscriptionConfirmation$Properties>;
  public persistentSubscriptionStreamEventAppeared$: CommandObservableWithData<eventstore.IncomingCodes.PersistentSubscriptionStreamEventAppeared, eventstore.PersistentSubscriptionStreamEventAppeared$Properties>;
  public pong$: CommandObservable<eventstore.IncomingCodes.Pong>;
  public readAllEventsBackwardCompleted$: CommandObservableWithData<eventstore.IncomingCodes.ReadAllEventsBackwardCompleted, eventstore.ReadAllEventsBackwardCompleted$Properties>;
  public readAllEventsForwardCompleted$: CommandObservableWithData<eventstore.IncomingCodes.ReadAllEventsForwardCompleted, eventstore.ReadAllEventsForwardCompleted$Properties>;
  public readEventCompleted$: CommandObservableWithData<eventstore.IncomingCodes.ReadEventCompleted, eventstore.ReadEventCompleted$Properties>;
  public readStreamEventsBackwardCompleted$: CommandObservableWithData<eventstore.IncomingCodes.ReadStreamEventsBackwardCompleted, eventstore.ReadStreamEventsBackwardCompleted$Properties>;
  public readStreamEventsForwardCompleted$: CommandObservableWithData<eventstore.IncomingCodes.ReadStreamEventsForwardCompleted, eventstore.ReadStreamEventsForwardCompleted$Properties>;
  public replicaSubscribed$: CommandObservable<eventstore.IncomingCodes.ReplicaSubscribed>;
  public scavengeDatabaseCompleted$: CommandObservableWithData<eventstore.IncomingCodes.ScavengeDatabaseCompleted, eventstore.ScavengeDatabaseCompleted$Properties>;
  public streamEventAppeared$: CommandObservableWithData<eventstore.IncomingCodes.StreamEventAppeared, eventstore.StreamEventAppeared$Properties>;
  public subscriptionConfirmation$: CommandObservableWithData<eventstore.IncomingCodes.SubscriptionConfirmation, eventstore.SubscriptionConfirmation$Properties>;
  public subscriptionDropped$: CommandObservableWithData<eventstore.IncomingCodes.SubscriptionDropped, eventstore.SubscriptionDropped$Properties>;
  public transactionCommitCompleted$: CommandObservableWithData<eventstore.IncomingCodes.TransactionCommitCompleted, eventstore.TransactionCommitCompleted$Properties>;
  public transactionStartCompleted$: CommandObservableWithData<eventstore.IncomingCodes.TransactionStartCompleted, eventstore.TransactionStartCompleted$Properties>;
  public transactionWriteCompleted$: CommandObservableWithData<eventstore.IncomingCodes.TransactionWriteCompleted, eventstore.TransactionWriteCompleted$Properties>;
  public updatePersistentSubscriptionCompleted$: CommandObservableWithData<eventstore.IncomingCodes.UpdatePersistentSubscriptionCompleted, eventstore.UpdatePersistentSubscriptionCompleted$Properties>;
  public writeEventsCompleted$: CommandObservableWithData<eventstore.IncomingCodes.WriteEventsCompleted, eventstore.WriteEventsCompleted$Properties>;
}