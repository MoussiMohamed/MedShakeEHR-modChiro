/*
 * This file is part of MedShakeEHR.
 *
 * Copyright (c) 2017
 * Bertrand Boutillier <b.boutillier@gmail.com>
 * http://www.medshake.net
 *
 * MedShakeEHR is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * MedShakeEHR is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with MedShakeEHR.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Js pour le formulaire d'antécédents (colonne latérale dossier patient)
 *
 * @author Bertrand Boutillier <b.boutillier@gmail.com>
 * @contrib fr33z00 <https://www.github.com/fr33z00>
 */

$(document).ready(function() {

  //calcul IMC
  if ($('input[name=p_imc]').length > 0) {

    imc = imcCalc($('input[name=p_poids]').val(), $('input[name=p_taillePatient]').val());
    if (imc > 0) {
      $('input[name=p_imc]').val(imc);
    }

    $("#patientLatCol").on("keyup", "#id_poids_id , #id_taillePatient_id", function() {
      poids = $('#id_poids_id').val();
      taille = $('#id_taillePatient_id').val();
      imc = imcCalc(poids, taille);
      $('#id_imc_id').val(imc);
      patientID = $('#identitePatient').attr("data-patientID");
      setPeopleDataByTypeName(imc, patientID, 'imc', '#id_imc_id', '0');

    });
  }

  //ajutement auto des textarea en hauteur
  $("#formName_chiroATCD textarea").each(function(index, element) {
    $(element).css("overflow", "hidden");
    if (element.offsetParent && element.value!='')
        auto_grow(element);
  });

  $("#patientLatCol").on("keyup", "#formName_chiroATCD textarea", function() {
    $(this).css("overflow", "hidden");
    auto_grow(this);
  });

});
