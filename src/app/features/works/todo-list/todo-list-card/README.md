<!-- AI Generated -->

This is an Angular component that is used to display a to-do list card. The component uses the @Input decorator
to accept two properties, data and cardType, and the @Output decorator to emit an event when the edit button is clicked.

The component uses FontAwesome icons to display the trash, check, and pen icons on the card. It also uses the TodoListService,
ModalService, and ConfirmationModalService to handle the logic for deleting a list or task and for displaying confirmation modals.

The ngOnInit() method is used to subscribe to the selectedListChanges$ observable from the TodoListService to update the
selectedList property. The ngOnDestroy() method is used to unsubscribe from observables to prevent memory leaks.

The onDelete(data: any) method handles the deletion of a list or task based on the cardType property and calls the
appropriate method from the TodoListService. The onCheckTask(task: Task) method is used to toggle the checked property
of a task. The onEdit(data: TodoList | Task) method is used to emit the editEvent event with the data passed as the payload.
