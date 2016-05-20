Template.meteorErrors.helpers({
	errors: function() {
		return Errors.collection.find();
	}
});

// Рендеринг шаблона ошибки
Template.meteorError.rendered = function() {
	var error = this.data;

	// Установка параметра seen (просмотрено) с задержкой только после рендеринга следующего шаблона
	Meteor.defer(function() {
		Errors.collection.update(error._id, {$set: {seen: true}});
	});
};
